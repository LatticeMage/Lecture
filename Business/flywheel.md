
# Flywheel Test

<script src="https://cdn.jsdelivr.net/npm/mermaid@8/dist/mermaid.min.js"></script>

<script>mermaid.initialize({startOnLoad:true});</script>

```mermaid
graph TD
    root((mindmap))
    origins[Origins]
    longHistory[Long history]
    icon[::icon(fa fa-book)]
    popularisation[Popularisation]
    tonyBuzan[British popular psychology author Tony Buzan]
    research[Research]
    effectiveness[On effectiveness<br/>and features]
    autoCreation[On Automatic creation]
    uses[Uses]
    creativeTech[Creative techniques]
    strategicPlan[Strategic planning]
    argumentMap[Argument mapping]
    tools[Tools]
    pen[Pen and paper]
    mermaid[Mermaid]

    root --> origins
    origins --> longHistory
    origins --> icon
    origins --> popularisation
    popularisation --> tonyBuzan

    root --> research
    research --> effectiveness
    research --> autoCreation
    autoCreation --> uses
    uses --> creativeTech
    uses --> strategicPlan
    uses --> argumentMap

    root --> tools
    tools --> pen
    tools --> mermaid
