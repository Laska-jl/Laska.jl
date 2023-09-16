#############################
#
# Helper functions
#
#############################

function getdepths(p::PhyOutput)
    return unique(p._info[!, "depth"])
end

function getdepths(t::relativeSpikes)
    return unique(t._info[!, "depth"])
end

function getclusters(p::PhyOutput)
    return deepcopy(p._info[!, "cluster_id"])
end

function getclusters(t::relativeSpikes)
    return deepcopy(t._info[!, "cluster_id"])
end

function nclusters(t::relativeSpikes)
    return length(t._info[!, "cluster_id"])
end

function nclusters(p::PhyOutput)
    return length(p._info[!, "cluster_id"])
end

function getspiketimes(p::PhyOutput)
    return p._spiketimes
end

function getspiketimes(t::relativeSpikes)
    return t._spiketimes
end

function getspiketimes(p::PhyOutput, cluster::Int64)
    return p._spiketimes[p._spiketimes[:, 1].==cluster, :]
end

function getspiketimes(t::relativeSpikes, cluster::Int64)
    return t._spiketimes[t._spiketimes[:, 1].==cluster, :]
end

function ntriggers(t::relativeSpikes)
    return t._specs["ntrig"]
end

"""
    normalize(vec::Vector{Float64}, min::Real = 0, max::Real = 1)

Returns a min-max normalized version of `vec`. Defaults to 0-1 but custom ranges can be specified.

See [`normalize!`](@ref) for an in-place version
"""
function normalize(vec::Vector{<:Real}, min::Real, max::Real)
    x::Vector{Float64} = deepcopy(vec)
    for v in eachindex(x)
        x[v] = min + ((x[v] - minimum(x)) * (max - min)) / (maximum(x) - minimum(x))
    end
    return x
end

function normalize(vec::Vector{<:Real})
    x::Vector{Float64} = deepcopy(vec)
    for v in eachindex(x)
        x[v] = ((x[v] - minimum(x))) / (maximum(x) - minimum(x))
    end
    return x
end



"""
    normalize!(vec::Vector{<:AbstractFloat}, min::Real, max::Real)

Normalize an `AbstractFloat` vector in place.

See [`normalize`](@ref) for a version that works on non-Float vectors.
"""
function normalize!(vec::Vector{<:AbstractFloat})
    for v in eachindex(vec)
        vec[v] = ((vec[v] - minimum(vec))) / (maximum(vec) - minimum(vec))
    end
end

function normalize!(vec::Vector{<:AbstractFloat}, min::Real, max::Real)
    for v in eachindex(vec)
        vec[v] = min + ((vec[v] - minimum(vec)) * (max - min)) / (maximum(vec) - minimum(vec))
    end
end



"""
Add `new` vector to the `info` df of PhyOutput/relativeSpikes.

If no `keys` are provided the vector is assumed to be sorted correctly to begin with!
"""
function addinfo!(p::PhyOutput, new::Vector, keys::Vector, colname::String)
    DataFrames.sort!(p._info, :cluster_id)
    sort = sortperm(keys)
    if keys[sort] != p._info[!, "cluster_id"]
        throw(ArgumentError("keys does not match clusters in p"))
    end
    new = new[sort]
    insertcols!(p._info, colname => new)
end

function addinfo!(t::relativeSpikes, new::Vector, keys::Vector, colname::String)
    DataFrames.sort!(t._info, :cluster_id)
    sort = sortperm(keys)
    if keys[sort] != t._info[!, "cluster_id"]
        throw(ArgumentError("keys does not match clusters in p"))
    end
    new = new[sort]
    insertcols!(t._info, colname => new)
end

# If no key is provided we assume that the vector is already sorted in accordance with the info df
function addinfo!(p::PhyOutput, new::Vector, colname::String)
    insertcols!(p._info, colname => new)
end

function addinfo!(t::relativeSpikes, new::Vector, colname::String)
    insertcols!(t._info, colname => new)
end

function extendvec(v::Vector)
    out = zeros(
        typeof(v[1]),
        length(minimum(v):maximum(v)),
        2
    )
    out[:, 1] = minimum(v):maximum(v)
    v = v .- minimum(v) .+ 1

    out[v, 2] .= 1
    return out
end

function extendvec!(out::Matrix{Int64}, v::Vector{Int64})
    out[:, 1] = minimum(v):maximum(v)
    v::Vector{Int64} = v .- minimum(v) .+ 1


    @simd for i in eachindex(v)
        out[v[i], 2] = 1
    end
    return out
end


function extendvec(v::Vector{Int64})
    out::Matrix{Int64} = zeros(
        Int64,
        length(minimum(v):maximum(v)),
        2
    )
    return extendvec!(out, v)
end

function extendvecthin(v::Vector{Int64})
    out::Matrix{Int64} = zeros(
        Int64,
        length(minimum(v):maximum(v)),
        2
    )
    return extendvec!(out, v)[:, 2]
end

"""
    expandgrid(v::Vector{Int64})


Similar to expand.grid in R.
Will return a Matrix containing all combinations of items in v.         
`[1 2]` is considered the same as `[2 1]`       
There is no checking for uniqueness of items; ie       

    julia> expandgrid([1,1,1])
Will return   

    3×2 Matrix{Int64}:
    1  1
    1  1
    1  1

"""
function expandgrid(v::Vector{Int64})
    out::Matrix{Int64} = Matrix{Int64}(undef, (2, binomial(length(v), 2)))
    s = 0
    for i in eachindex(v)
        c = pop!(v)
        for (c1, c2) in Iterators.product(c, v)
            s += 1
            out[:, s] = [c1 c2]
        end
    end
    return out
end
