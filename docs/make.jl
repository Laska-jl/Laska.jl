using Pkg

Pkg.add("Documenter")

using Documenter, Laska


makedocs(
    sitename="Laska Documentation",
    pages=[
        "Home" => "index.md",
        "Guide" => [
            "guide/install.md",
            "guide/importing.md"
        ],
        "Reference" => [
            "Structs & their interfaces" => "ref/structs.md",
            "Importing data" => "ref/import.md",
            "Filter data" => "ref/filters.md",
            "Trigger events" => "ref/triggers.md",
            "Summarizing" => "ref/summarize.md",
            "Visualize" => "ref/visualize.md",
            "Helpers" => "ref/helpers.md"
        ],
        "LaskaML" => [
            "Overview" => "guide/mloverview.md",
            "Reference" => [
                "ref/hhref.md"
            ]
        ]
    ]
)

deploydocs(
    repo="github.com/Laska-jl/Laska.jl.git"
)
