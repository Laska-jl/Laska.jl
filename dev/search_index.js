var documenterSearchIndex = {"docs":
[{"location":"ref/structs/#Types-and-their-interfaces","page":"Structs & their interfaces","title":"Types and their interfaces","text":"","category":"section"},{"location":"ref/structs/#Abstract-types","page":"Structs & their interfaces","title":"Abstract types","text":"","category":"section"},{"location":"ref/structs/#AbstractExperiment","page":"Structs & their interfaces","title":"AbstractExperiment","text":"","category":"section"},{"location":"ref/structs/","page":"Structs & their interfaces","title":"Structs & their interfaces","text":"Laska.AbstractExperiment{T}","category":"page"},{"location":"ref/structs/#Laska.AbstractExperiment","page":"Structs & their interfaces","title":"Laska.AbstractExperiment","text":"abstract type AbstractExperiment{T} end\n\nParent type to concrete types representing entire experiments containing their specifications, metadata and clusters.\n\n\n\n\n\n","category":"type"},{"location":"ref/structs/#Interfaces","page":"Structs & their interfaces","title":"Interfaces","text":"","category":"section"},{"location":"ref/structs/","page":"Structs & their interfaces","title":"Structs & their interfaces","text":"The following functions provide interfaces to all structs that are children of Laska.AbstractExperiment.","category":"page"},{"location":"ref/structs/","page":"Structs & their interfaces","title":"Structs & their interfaces","text":"Laska.clusterids","category":"page"},{"location":"ref/structs/#Laska.clusterids","page":"Structs & their interfaces","title":"Laska.clusterids","text":"clusterids(experiment::T) where {T<:AbstractExperiment}\n\nReturns a Vector of all cluster id:s present in experiment.\n\n\n\n\n\n","category":"function"},{"location":"ref/structs/","page":"Structs & their interfaces","title":"Structs & their interfaces","text":"Laska.getcluster","category":"page"},{"location":"ref/structs/#Laska.getcluster","page":"Structs & their interfaces","title":"Laska.getcluster","text":"function getcluster(experiment::T, cluster::Int64) where {T<:AbstractExperiment}\n\nReturns a cluster from experiment.\n\n\n\n\n\n","category":"function"},{"location":"ref/structs/","page":"Structs & their interfaces","title":"Structs & their interfaces","text":"Laska.clustervector","category":"page"},{"location":"ref/structs/#Laska.clustervector","page":"Structs & their interfaces","title":"Laska.clustervector","text":"clustervector(experiment::T) where {T<:AbstractExperiment}\n\nReturns a Vector{T} where T<:AbstractCluster containing all clusters in experiment.\n\n\n\n\n\n","category":"function"},{"location":"ref/structs/","page":"Structs & their interfaces","title":"Structs & their interfaces","text":"Laska.getmeta","category":"page"},{"location":"ref/structs/#Laska.getmeta","page":"Structs & their interfaces","title":"Laska.getmeta","text":"getmeta(experiment::T, entry::String) where {T<:AbstractExperiment}\ngetmeta(experiment::T) where {T<:AbstractExperiment}\n\nReturns experiment meta info from spikeGLX. If an entry string is not supplied all entries are returned.\n\n\n\n\n\n","category":"function"},{"location":"ref/structs/","page":"Structs & their interfaces","title":"Structs & their interfaces","text":"Laska.triggertimes","category":"page"},{"location":"ref/structs/#Laska.triggertimes","page":"Structs & their interfaces","title":"Laska.triggertimes","text":"triggertimes(experiment::T) where {T<:AbstractExperiment}\n\nReturns the timestamps of trigger events in experiment.\n\n\n\n\n\n","category":"function"},{"location":"ref/structs/","page":"Structs & their interfaces","title":"Structs & their interfaces","text":"Laska.ntrigs","category":"page"},{"location":"ref/structs/#Laska.ntrigs","page":"Structs & their interfaces","title":"Laska.ntrigs","text":"ntrigs(experiment::T) where {T<:AbstractExperiment}\n\nReturns the number of trigger events in experiment.\n\n\n\n\n\n","category":"function"},{"location":"ref/structs/#AbstractCluster","page":"Structs & their interfaces","title":"AbstractCluster","text":"","category":"section"},{"location":"ref/structs/","page":"Structs & their interfaces","title":"Structs & their interfaces","text":"Laska.AbstractCluster{T}","category":"page"},{"location":"ref/structs/#Laska.AbstractCluster","page":"Structs & their interfaces","title":"Laska.AbstractCluster","text":"abstract type AbstractCluster{T} end\n\nParent type to concrete types representing single clusters.\n\n\n\n\n\n","category":"type"},{"location":"ref/structs/#Interfaces-2","page":"Structs & their interfaces","title":"Interfaces","text":"","category":"section"},{"location":"ref/structs/","page":"Structs & their interfaces","title":"Structs & their interfaces","text":"The following functions provide interfaces to all structs that are children of Laska.AbstractCluster.","category":"page"},{"location":"ref/structs/","page":"Structs & their interfaces","title":"Structs & their interfaces","text":"Laska.id","category":"page"},{"location":"ref/structs/#Laska.id","page":"Structs & their interfaces","title":"Laska.id","text":"id(cluster::Cluster)\n\nReturns the id of cluster\n\n\n\n\n\n","category":"function"},{"location":"ref/structs/","page":"Structs & their interfaces","title":"Structs & their interfaces","text":"Laska.nspikes","category":"page"},{"location":"ref/structs/#Laska.nspikes","page":"Structs & their interfaces","title":"Laska.nspikes","text":"nspikes(cluster::T) where {T<:AbstractCluster}\n\nReturns the number of spikes (length of the spiketimes field) of Cluster.\n\n\n\n\n\n","category":"function"},{"location":"ref/structs/","page":"Structs & their interfaces","title":"Structs & their interfaces","text":"Laska.info","category":"page"},{"location":"ref/structs/#Laska.info","page":"Structs & their interfaces","title":"Laska.info","text":"info(cluster::Cluster)\n\nReturns info (as dict) about cluster. A string may be supplied to return a specific entry (as Float64).\n\n\n\n\n\n","category":"function"},{"location":"ref/structs/","page":"Structs & their interfaces","title":"Structs & their interfaces","text":"Laska.spiketimes","category":"page"},{"location":"ref/structs/#Laska.spiketimes","page":"Structs & their interfaces","title":"Laska.spiketimes","text":"spiketimes(cluster::Cluster)\n\nReturns the spiketimes of cluster.\n\n\n\n\n\n","category":"function"},{"location":"ref/structs/#Concrete-types","page":"Structs & their interfaces","title":"Concrete types","text":"","category":"section"},{"location":"ref/structs/#\"Experiment\"-wrappers","page":"Structs & their interfaces","title":"\"Experiment\" wrappers","text":"","category":"section"},{"location":"ref/structs/#PhyOutput","page":"Structs & their interfaces","title":"PhyOutput","text":"","category":"section"},{"location":"ref/structs/","page":"Structs & their interfaces","title":"Structs & their interfaces","text":"Laska.PhyOutput","category":"page"},{"location":"ref/structs/#Laska.PhyOutput","page":"Structs & their interfaces","title":"Laska.PhyOutput","text":"mutable struct PhyOutput{T} <: AbstractExperiment{T}\n    clusterids::Vector{Int64}\n    clusters::Vector{Cluster{T}}\n    trigtimes::Vector{T}\n    meta::Dict{SubString{String},SubString{String}}\nend\n\nStruct for holding Kilosort output preprocessed in Phy. Should be instantiated using the outer constructor Laska.importphy.\n\nDirect field access is not recommended. Basic interface functions include:\n\nLaska.clusterids – Returns all cluster ID:s as a Vector.\nLaska.getcluster – Returns a specific Laska.Cluster.\nLaska.clustervector – Returns all Laska.Cluster:s.\nLaska.getmeta – Returns the spikeGLX meta as a dict or a specific entry.\nLaska.triggertimes – Returns the trigger event times.\nLaska.ntrigs – Returns the length of the trigger event time Vector.\n\n\n\n\n\n","category":"type"},{"location":"ref/structs/#Single-cluster-wrappers","page":"Structs & their interfaces","title":"Single cluster wrappers","text":"","category":"section"},{"location":"ref/structs/#Cluster","page":"Structs & their interfaces","title":"Cluster","text":"","category":"section"},{"location":"ref/structs/","page":"Structs & their interfaces","title":"Structs & their interfaces","text":"Laska.Cluster","category":"page"},{"location":"ref/structs/#Laska.Cluster","page":"Structs & their interfaces","title":"Laska.Cluster","text":"struct Cluster{T} <: AbstractCluster{T}\n    id::Int64\n    info::Dict{String,String}\n    spiketimes::Vector{T}\nend\n\nStruct for holding a single Cluster.\n\nDirect field access is not recommended. Basic interface functions include:\n\nLaska.id – Returns the Cluster id.\nLaska.nspikes – Returns the number of spikes in the cluster (Based off length of the spiketimes field).\nLaska.info – Returns the info of the Cluster from \"cluster_info.tsv\" as a Dict.\nLaska.spiketimes – Returns a Vector containing all spiketimes of the Cluster.\n\n\n\n\n\n","category":"type"},{"location":"guide/importing/#Importing-data-processed-in-Phy","page":"Importing data processed in Phy","title":"Importing data processed in Phy","text":"","category":"section"},{"location":"guide/importing/","page":"Importing data processed in Phy","title":"Importing data processed in Phy","text":"Importing Phy output data is done using Laska.importphy. This will return a Laska.PhyOutput struct.","category":"page"},{"location":"guide/importing/#Basic-usage","page":"Importing data processed in Phy","title":"Basic usage","text":"","category":"section"},{"location":"guide/importing/","page":"Importing data processed in Phy","title":"Importing data processed in Phy","text":"The method below will import all clusters found in phydir. By default, only \"good\" clusters as found in \"cluster_info.tsv\" will be included. Setting includemua to false will include all clusters.","category":"page"},{"location":"guide/importing/","page":"Importing data processed in Phy","title":"Importing data processed in Phy","text":"importphy(phydir::String, glxdir::String, triggerpath::String; includemua::Bool=false)","category":"page"},{"location":"guide/importing/#Filtering-clusters","page":"Importing data processed in Phy","title":"Filtering clusters","text":"","category":"section"},{"location":"guide/importing/","page":"Importing data processed in Phy","title":"Importing data processed in Phy","text":"These methods below accept filters which may be used to exclude clusters based on variables found in \"cluster_info.tsv\".\nfilters are a Tuple with 2 entries:\nA Symbol matching a column in \"cluster_info.tsv\".\nA Function returning true/false applicable to the specified column.","category":"page"},{"location":"guide/importing/","page":"Importing data processed in Phy","title":"Importing data processed in Phy","text":"Several filters may be included by wrapping them in a Tuple.","category":"page"},{"location":"guide/importing/","page":"Importing data processed in Phy","title":"Importing data processed in Phy","text":"importphy(phydir::String, filters::Tuple{Symbol,Function}, glxdir::String=\"\", triggerpath::String=\"\"; includemua::Bool=false)\n\nimportphy(phydir::String, filters::Tuple{Tuple{Symbol,Function}}, glxdir::String=\"\", triggerpath::String=\"\"; includemua::Bool=false)","category":"page"},{"location":"guide/importing/#Arguments","page":"Importing data processed in Phy","title":"Arguments","text":"","category":"section"},{"location":"guide/importing/#Directories","page":"Importing data processed in Phy","title":"Directories","text":"","category":"section"},{"location":"guide/importing/","page":"Importing data processed in Phy","title":"Importing data processed in Phy","text":"3 directories may be provided in the form of their path(s) as Strings.","category":"page"},{"location":"guide/importing/","page":"Importing data processed in Phy","title":"Importing data processed in Phy","text":"Currently, only 1 of these is required:\nphydir – The directory containing the files \"clusterinfo.tsv\", \"spikeclusters.npy\" & \"spike_times.npy\"","category":"page"},{"location":"guide/importing/","page":"Importing data processed in Phy","title":"Importing data processed in Phy","text":"Other arguments are optional and include:\nglxdir – Directory containing meta information from spikeGLX (*.meta). The metafile is parsed to a Dict and may be retrieved using Laska.getmeta\ntriggerpath – Direct path to a .csv or .bin file exported from spikeGLX containing a single channel.","category":"page"},{"location":"guide/importing/","page":"Importing data processed in Phy","title":"Importing data processed in Phy","text":"","category":"page"},{"location":"guide/importing/","page":"Importing data processed in Phy","title":"Importing data processed in Phy","text":"An optional triggerpath pointing directly to a single trigger channel exported from spikeGLX may be supplied.A .csv or .bin is accepted. For long recordings, a .csv file may be noticeably slower to read than a .bin file.","category":"page"},{"location":"ref/filters/#Filtering","page":"Filter data","title":"Filtering","text":"","category":"section"},{"location":"ref/filters/","page":"Filter data","title":"Filter data","text":"This section covers functions which filters clusters or spikes in some way.","category":"page"},{"location":"ref/filters/#By-depth","page":"Filter data","title":"By depth","text":"","category":"section"},{"location":"ref/filters/","page":"Filter data","title":"Filter data","text":"Laska.spikesatdepth","category":"page"},{"location":"ref/filters/#Laska.spikesatdepth","page":"Filter data","title":"Laska.spikesatdepth","text":"spikesatdepth(experiment::E{T}, depth::N) where {E<:AbstractExperiment,T<:Real,N<:Real}\nspikesatdepth(experiment::E{T}, depth::Tuple{2,N}) where {E<:AbstractExperiment,T<:Real,N<:Real}\nspikesatdepth(experiment::E{T}, depth::Set{N}) where {E<:AbstractExperiment,T<:Real,N<:Real}\n\nReturns a Vector{T} of all spiketimes at/in depth.\n\nThe included depths are controlled by the type of the depth variable:                 \n\nA single number returns only the spikes of clusters at that exact depth.                  \nA Tuple with 2 entries returns all clusters at depths between (and including) the values.                  \nA Set returns the clusters with the exact depths in the Set.\n\n\n\n\n\n","category":"function"},{"location":"ref/import/#Import-data","page":"Importing data","title":"Import data","text":"","category":"section"},{"location":"ref/import/#Phy-output-data","page":"Importing data","title":"Phy output data","text":"","category":"section"},{"location":"ref/import/","page":"Importing data","title":"Importing data","text":"Laska.importphy","category":"page"},{"location":"ref/import/#Laska.importphy","page":"Importing data","title":"Laska.importphy","text":"importphy(phydir::String, glxdir::String, triggerpath::String; includemua::Bool=false)\nimportphy(phydir::String, filters::Tuple{Symbol,Function}, glxdir::String=\"\", triggerpath::String=\"\"; includemua::Bool=false)\nimportphy(phydir::String, filters::Tuple{Tuple{Symbol,Function}}, glxdir::String=\"\", triggerpath::String=\"\"; includemua::Bool=false)\n\nImport Kilosort output processed in Phy. Spiketimes are sorted.\n\nBy default, only \"good\" clusters as per phy output are included. Setting includemua=true will include \"mua\" clusters as well as unclassified.             Clusters may be further filtered based on any variable in \"cluster_info.tsv\". This is done by including a Tuple with the column to be filtered as a symbol and a filtering function. Several Tuples containing such filters may be included by wrapping them in a Tuple.         \n\nExample\n\n# Removes any cluster with a mean firing rate less than 1:\n\n# A function returning true if x > 1\nfunction filterfunc(x::Float64)\n    return x > 1\nend\n\n# A tuple with the above function (filterfunc) and the column to which it should be\n# applied (:fr).\nfiltertuple = (:fr, filterfunc)\n\nresult = importphy(\"phyoutput_directory\", \"glxoutput_directory\", \"direct_path_to_triggerfile\", filtertuple)\n\n\n\n\n\n","category":"function"},{"location":"ref/import/#SpikeGLX","page":"Importing data","title":"SpikeGLX","text":"","category":"section"},{"location":"ref/import/","page":"Importing data","title":"Importing data","text":"Laska.spikemmap\nLaska.parseglxmeta","category":"page"},{"location":"ref/import/#Laska.spikemmap","page":"Importing data","title":"Laska.spikemmap","text":"spikemmap(file::String, nchans::Int, filesizebytes::Int)\nspikemmap(file::String, meta::Dict{Substring{String}, SubString{String}})\n\nCreate a memory map of a spikeGLX .bin file. Requires a path to the file, the number of channels and the file size in bytes.               The easiest way to provide this is to pass a parsed .meta file in which the entries \"nSavedChans\" and \"fileSizeBytes\" describe number of channels and file size.\n\n\n\n\n\n","category":"function"},{"location":"ref/import/#Laska.parseglxmeta","page":"Importing data","title":"Laska.parseglxmeta","text":"parseglxmeta(file::String)\n\nParses a spikeGLX .meta file into a Dict.\n\n\n\n\n\n","category":"function"},{"location":"ref/import/","page":"Importing data","title":"Importing data","text":"Laska.tovolts","category":"page"},{"location":"ref/import/#Laska.tovolts","page":"Importing data","title":"Laska.tovolts","text":"tovolts(in::T{Int16}, meta::Dict{SubString{String},SubString{String}})\n\nConvert a Vector/Matrix of raw spikeGLX Int16 data to volts.\n\n\n\n\n\n","category":"function"},{"location":"ref/import/","page":"Importing data","title":"Importing data","text":"Laska.importchanint16bin\nLaska.importchanint16csv","category":"page"},{"location":"ref/import/#Laska.importchanint16bin","page":"Importing data","title":"Laska.importchanint16bin","text":"importchanint16bin(path::String)\n\nImport a .bin file containing a SINGLE channel.\n\n\n\n\n\n","category":"function"},{"location":"ref/import/#Laska.importchanint16csv","page":"Importing data","title":"Laska.importchanint16csv","text":"importchanint16csv(path::String)\n\nImport a .csv file containing a SINGLE channel.\n\n\n\n\n\n","category":"function"},{"location":"ref/import/","page":"Importing data","title":"Importing data","text":"Laska.gettrig","category":"page"},{"location":"ref/import/#Laska.gettrig","page":"Importing data","title":"Laska.gettrig","text":"gettrig(t::Vector{T}) where {T<:Real}\n\nExtract trigger event indices.\n\nAssumes that t is 0 except at trigger events. Returns only the first index at each trigger event(ie series of sequential nonzero indices).\n\n\n\n\n\n","category":"function"},{"location":"ref/helpers/#Helpers","page":"Helpers","title":"Helpers","text":"","category":"section"},{"location":"ref/helpers/","page":"Helpers","title":"Helpers","text":"This section describes general helper functions that does not fit under other, more specific headings.","category":"page"},{"location":"ref/helpers/","page":"Helpers","title":"Helpers","text":"using Laska","category":"page"},{"location":"ref/helpers/#Helpers-2","page":"Helpers","title":"Helpers","text":"","category":"section"},{"location":"ref/helpers/#ISI","page":"Helpers","title":"ISI","text":"","category":"section"},{"location":"ref/helpers/","page":"Helpers","title":"Helpers","text":"Laska.isi","category":"page"},{"location":"ref/helpers/#Laska.isi","page":"Helpers","title":"Laska.isi","text":"isi(cluster::Cluster{T}) where {T<:Real}\n\nCalculate the ISI of each spike in cluster.\n\n\n\n\n\n","category":"function"},{"location":"ref/helpers/#Rounding","page":"Helpers","title":"Rounding","text":"","category":"section"},{"location":"ref/helpers/","page":"Helpers","title":"Helpers","text":"Functions for \"rounding\" numbers to arbitrary intervals.","category":"page"},{"location":"ref/helpers/","page":"Helpers","title":"Helpers","text":"Laska.roundup","category":"page"},{"location":"ref/helpers/#Laska.roundup","page":"Helpers","title":"Laska.roundup","text":"roundup(value::T, interval::N) where T<:Real where N<:Real\n\nRounds value up to the nearest greater multiple of interval.\n\n\n\n\n\n","category":"function"},{"location":"ref/helpers/#Examples","page":"Helpers","title":"Examples","text":"","category":"section"},{"location":"ref/helpers/","page":"Helpers","title":"Helpers","text":"Laska.roundup(12, 30)\nLaska.roundup(12, 23)\nLaska.roundup(12.5, 1)\nLaska.roundup(17, 3.8)","category":"page"},{"location":"ref/helpers/","page":"Helpers","title":"Helpers","text":"Laska.rounddown","category":"page"},{"location":"ref/helpers/#Laska.rounddown","page":"Helpers","title":"Laska.rounddown","text":"rounddown(value::T, interval::N) where {T<:Real} where {N<:Real}\n\nRounds value down to the nearest lesser multiple of interval.\n\n\n\n\n\n","category":"function"},{"location":"ref/helpers/#Examples-2","page":"Helpers","title":"Examples","text":"","category":"section"},{"location":"ref/helpers/","page":"Helpers","title":"Helpers","text":"Laska.rounddown(12, 30)\nLaska.rounddown(12, 23)\nLaska.rounddown(12.5, 1)\nLaska.rounddown(17, 3.8)","category":"page"},{"location":"ref/helpers/","page":"Helpers","title":"Helpers","text":"Laska.arbitraryround","category":"page"},{"location":"ref/helpers/#Laska.arbitraryround","page":"Helpers","title":"Laska.arbitraryround","text":"arbitraryround(value::T, interval::N) where {T<:Real} where {N<:Real}\n\nRounds value to the nearest multiple of interval.\n\n\n\n\n\n","category":"function"},{"location":"ref/helpers/#Examples-3","page":"Helpers","title":"Examples","text":"","category":"section"},{"location":"ref/helpers/","page":"Helpers","title":"Helpers","text":"Laska.arbitraryround(12, 30)\nLaska.arbitraryround(12, 23)\nLaska.arbitraryround(12.5, 1)\nLaska.arbitraryround(17, 3.8)","category":"page"},{"location":"ref/summarize/#Summary-statistics","page":"Summarizing","title":"Summary statistics","text":"","category":"section"},{"location":"ref/summarize/#Summary-statistics-of-clusters","page":"Summarizing","title":"Summary statistics of clusters","text":"","category":"section"},{"location":"ref/summarize/#MAD","page":"Summarizing","title":"MAD","text":"","category":"section"},{"location":"ref/summarize/","page":"Summarizing","title":"Summarizing","text":"Laska.mad","category":"page"},{"location":"ref/summarize/#Laska.mad","page":"Summarizing","title":"Laska.mad","text":"mad(cluster::T) where {T<:Laska.AbstractCluster}\n\nCalculate the median absolute difference from the median interspike interval of a cluster.\n\n\n\n\n\n","category":"function"},{"location":"ref/summarize/#CV2","page":"Summarizing","title":"CV2","text":"","category":"section"},{"location":"ref/summarize/","page":"Summarizing","title":"Summarizing","text":"Laska.cv2(cluster::Laska.Cluster)","category":"page"},{"location":"ref/summarize/#Laska.cv2-Tuple{Laska.Cluster}","page":"Summarizing","title":"Laska.cv2","text":"cv2(cluster::Cluster)\n\nReturns CV2 values of cluster as a vector.\n\nCV2 is calculated according to:\n\nCV2 = frac2ISI_n+1 - ISI_n(ISI_n+1 + ISI_n)\n\n\n\n\n\n","category":"method"},{"location":"ref/summarize/","page":"Summarizing","title":"Summarizing","text":"Laska.cv2mean(cluster::Laska.Cluster)","category":"page"},{"location":"ref/summarize/#Laska.cv2mean-Tuple{Laska.Cluster}","page":"Summarizing","title":"Laska.cv2mean","text":"cv2mean(cluster::Cluster)\n\nCalculates the mean CV2 of cluster.\n\n\n\n\n\n","category":"method"},{"location":"ref/summarize/#Frequency","page":"Summarizing","title":"Frequency","text":"","category":"section"},{"location":"ref/summarize/","page":"Summarizing","title":"Summarizing","text":"Laska.frequency(cluster::Laska.Cluster, period::T) where {T<:Real}","category":"page"},{"location":"ref/summarize/#Laska.frequency-Union{Tuple{T}, Tuple{Laska.Cluster, T}} where T<:Real","page":"Summarizing","title":"Laska.frequency","text":"frequency(cluster::Cluster, period::T) where {T<:Real}\n\nReturns a Vector containing the frequency of the cluster in the form of spikes/period binned at each multiple of period.             Spiketimes are binned to the next largest multiple of period. Ie a spike happening at time = 30001 will be in the 60000 bin.\n\nExample\n\nFor a cluster sampled at 30 000Hz...\n\nLaska.frequency(cluster, 30000)\n\n...will return spikes/second.\n\nIndexing into the result as:        \n\nresult[n]\n\nWill return the n:th bin which describes the number of spikes occuring between period * n and period * n-1.\n\n\n\n\n\n","category":"method"},{"location":"#Laska.jl-documentation","page":"Home","title":"Laska.jl documentation","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Welcome to the WIP documentation for the WIP package Laska.jl.","category":"page"},{"location":"","page":"Home","title":"Home","text":"Laska.jl is an attempt at providing functions for importing, manipulating and visualizing data obtained from Neuropixel probes using spikeGLX and preprocessed in KiloSort and Phy.","category":"page"},{"location":"ref/visualize/#Visualizing","page":"Visualize","title":"Visualizing","text":"","category":"section"},{"location":"ref/visualize/#Recipes","page":"Visualize","title":"Recipes","text":"","category":"section"},{"location":"ref/visualize/#Frequency-by-depth","page":"Visualize","title":"Frequency by depth","text":"","category":"section"},{"location":"ref/visualize/","page":"Visualize","title":"Visualize","text":"frequencybydepthplot","category":"page"},{"location":"ref/visualize/#Laska.frequencybydepthplot","page":"Visualize","title":"Laska.frequencybydepthplot","text":"frequencybydepthplot(experiment::RelativeSpikes, depths, period)\nfrequencybydepthplot!(ax, experiment::RelativeSpikes, depths, period)\n\nMakie plot recipe for relative frequency by depth.           \n\nRequires an experiment::RelativeSpikes, number of depths and period for length of bins when calculating frequency.\n\nAttributes\n\nPlot-specific Attributes\n\ncustomx A vector of custom x values. Should be of the same length as the number of frequency bins.\n\nGeneral 'lines' attributes\n\ncolor\nlinestyle\nlinewidth\ncolormap\ncolorscale\ncolorrange\nnan_color\nlowclip\nhighclip\nalpha\nvisible\noverdraw\nfxaa\ninspectable\ndepth_shift\nspace\n\n\n\n\n\n","category":"function"}]
}
