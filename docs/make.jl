using Pkg

Pkg.add("Documenter")
Pkg.add("DocumenterVitepress")

using Documenter, Laska, LaskaCore, LaskaStats, LaskaPlot
using DocumenterVitepress, Unitful


makedocs(
    modules=[LaskaCore, LaskaStats, LaskaPlot, Laska],
    sitename="Laska Documentation",
    format=DocumenterVitepress.MarkdownVitepress(
        repo="github.com/Laska-jl/Laska.jl",
        devbranch="master",
        devurl="dev"
    ),
    pages=[
        "Home" => "index.md",
        "Guide" => [
            "guide/install.md",
            "guide/importing.md",
            "guide/types.md",
            "guide/relativespikes.md",
            "guide/importraw.md"
        ],
        "Reference" => [
            "ref/core_ref.md",
            "ref/stat_ref.md",
            "ref/plot_ref.md",
        ],
    ]
)

deploydocs(
    repo="github.com/Laska-jl/Laska.jl",
    target="build",
    devbranch="master",
    branch="gh-pages",
    push_preview=false
)
