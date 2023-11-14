######################################
#
# Calculate the frequency of a Cluster
#
######################################

"""

    frequency(cluster::Cluster, period::T) where {T<:Real}

Returns a Vector containing the frequency of the cluster in the form of spikes/period binned at each multiple of `period`.            
Spiketimes are binned to the next *largest* multiple of `period`. Ie a spike happening at time = 30001 will be in the 60000 bin.

# Example

For a cluster sampled at 30 000Hz...
```julia
Laska.frequency(cluster, 30000)
```
...will return spikes/second.

Indexing into the result as:        
```julia
result[n]
```
Will return the n:th bin which describes the number of spikes occuring between `period * n` and `period * n-1`.


"""
function frequency(cluster::Cluster, period::T) where {T<:Real}
    times = spiketimes(cluster)
    return frequency(times, period)
end

function frequency(cluster::RelativeCluster{N}, period::T) where {T<:Real,N<:Real}
    times::Vector{Vector{N}} = spiketimes(cluster)
    vec::Vector{N} = unpackvector(times)

    return frequency(vec, period)
end

# frequency of relative spikes by depth
# FIX: Create a new function `relativefrequency` and change this to return the absolute
# frequency at each depth. `relativefrequency` should return the relative frequency of each
# individual trigger like the old one did.

function frequency(vec::Vector{Vector{T}}, period::T) where {T<:Real}

    out::Vector{Vector{T}} = Vector{Vector{T}}(undef, length(vec))
    len = roundup(minval(vec), period):period:roundup(maxval(vec), period)
    for n in eachindex(out)
        if iszero(length(vec[n]))
            out[n] = zeros(T, length(len))
            continue
        end
        out[n] = frequency(vec[n], period, len)
    end

    return out
end


function frequency(times::Vector{T}, period::T) where {T<:Real}

    # NOTE: Should the binning be different? Use Laska.arbitraryround instead?
    accumulator::Dict{T,Int64} = Dict{T,Int64}(t => 0 for t in roundup(minimum(times; init=0), period):period:roundup(maximum(times; init=0), period))

    @inbounds for n in eachindex(times)
        accumulator[roundup(times[n], period)] += 1
    end

    sorter = sortperm(collect(keys(accumulator)))

    return collect(values(accumulator))[sorter]
end


function frequency(times::Vector{T}, period::T, steps::StepRange{T,T}) where {T<:Real}

    # NOTE: Should the binning be different? Use Laska.arbitraryround instead?
    accumulator::Dict{T,Int64} = Dict{T,Int64}(t => 0 for t in steps)

    @inbounds for n in eachindex(times)
        accumulator[roundup(times[n], period)] += 1
    end

    sorter = sortperm(collect(keys(accumulator)))

    return collect(values(accumulator))[sorter]
end


