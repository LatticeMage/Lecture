
# Flywheel Test

<script src="https://cdn.jsdelivr.net/npm/mermaid/dist/mermaid.min.js"></script>  


<script type="module">
  import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid/dist/mermaid.min.js';
  let config = { startOnLoad: true, flowchart: { useMaxWidth: false, htmlLabels: true } };
  mermaid.initialize(config);
</script>

<div class="mermaid">
classDiagram
    note "From Duck till Zebra"
    Animal <|-- Duck
    note for Duck "can fly\ncan swim\ncan dive\ncan help in debugging"
    Animal <|-- Fish
    Animal <|-- Zebra
    Animal : +int age
    Animal : +String gender
    Animal: +isMammal()
    Animal: +mate()
    class Duck{
        +String beakColor
        +swim()
        +quack()
    }
    class Fish{
        -int sizeInFeet
        -canEat()
    }
    class Zebra{
        +bool is_wild
        +run()
    }
</div>

<div class="mermaid">
flowchart TB
    c1-->a2
    subgraph one
    a1-->a2
    end
    subgraph two
    b1-->b2
    end
    subgraph three
    c1-->c2
    end
</div>


<!-- use the space below to define your chart -->
<div class="mermaid">
 %% Code for flowchart below
graph TB
    sq[Square shape] --> ci((Circle shape))

    subgraph A subgraph
        od>Odd shape]-- Two line<br>edge comment --> ro
        di{Diamond with <br/> line break} -.-> ro(Rounded<br>square<br>shape)
        di==>ro2(Rounded square shape)
    end

    %% Notice that no text in shape are added here instead that is appended further down
    e --> od3>Really long text with linebreak<br>in an Odd shape]

    %% Comments after double percent signs
    e((Inner / circle<br>and some odd <br>special characters)) --> f(,.?!+-*ز)

    cyr[Cyrillic]-->cyr2((Circle shape Начало));

     classDef green fill:#9f6,stroke:#333,stroke-width:2px;
     classDef orange fill:#f96,stroke:#333,stroke-width:4px;
     class sq,e green
     class di orange
</div>

<div class="mermaid">
%% Sequence diagram code
sequenceDiagram
    Alice ->> Bob: Hello Bob, how are you?
    Bob-->>John: How about you John?
    Bob--x Alice: I am good thanks!
    Bob-x John: I am good thanks!
    Note right of John: Bob thinks a long<br/>long time, so long<br/>that the text does<br/>not fit on a row.

    Bob-->Alice: Checking with John...
    Alice->John: Yes... John, how are you?
</div>

<div id="katex1"></div>
<div id="katex2"></div>
  
<div class="mermaid">
  
 
</div>



<div class="mermaid"></div>


<!-- mermaid output below -->
<div class="mermaid" id="mermaidChart0">
  <svg>
        Chart ends up here
    </svg>
</div>
  
  

<!-- mermaid script implementation below -->
<script src="mermaid.min.js"></script>

<script>
        var config = {
            startOnLoad:true,
            flowchart:{
                    useMaxWidth:false,
                    htmlLabels:true
            }
        };
        mermaid.initialize(config);
    </script>



<!-- mermaidAPI script implementation below -->
<script src="mermaidAPI.min.js"></script>

<script>
  var apiConfig = {
            startOnLoad:true,
            flowchart:{
                    useMaxWidth:false,
                    htmlLabels:true
            }
        };
    mermaidAPI.initialize(apiConfig);
    $(function(){
    // Example of using the API
        var element = document.querySelector("#graphDiv");

        var insertSvg = function(svgCode, bindFunctions){
            element.innerHTML = svgCode;
        };

        var graphDefinition = 'graph TB\na-->b';
        var graph = mermaidAPI.render('graphDiv', graphDefinition, insertSvg);
    });
</script>

