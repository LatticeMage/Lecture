
# Flywheel Test

<script type="module">
    import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid/dist/mermaid.esm.min.mjs';
</script>

<!-- use the space below to define your chart -->
<pre class="mermaid">
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
</pre>

<pre class="mermaid">
%% Sequence diagram code
sequenceDiagram
    Alice ->> Bob: Hello Bob, how are you?
    Bob-->>John: How about you John?
    Bob--x Alice: I am good thanks!
    Bob-x John: I am good thanks!
    Note right of John: Bob thinks a long<br/>long time, so long<br/>that the text does<br/>not fit on a row.

    Bob-->Alice: Checking with John...
    Alice->John: Yes... John, how are you?
</pre>

<div id="katex1"></div>
<div id="katex2"></div>
  
<pre class="mermaid">
  
 
</pre>



<pre class="mermaid"></pre>


<!-- mermaid output below -->
<pre class="mermaid" id="mermaidChart0">
  <svg>
        Chart ends up here
    </svg>
</pre>
  
  

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

