---
layout: slides
---

# Test

<div class="slide">

<script src="https://unpkg.com/mermaid@10.4.0/dist/mermaid.min.js"></script>


<div class="mermaid" width="700" height="350" >
%% Code for flowchart below
graph TB
    subgraph Flywheel Effect
        yt((Youtube<br>Twitch))
        fan((Iron Fans))
        dc((Discord))
        game((Game Writing))
        pay{{Crowdfunding}}
        learn((Learning<br>New Concept))
        yt -- value --> fan
        fan ==> pay
        dc ==> game
        game ==> learn
        learn ==> yt
        pay ==> dc

        update -.-> pay
        game -.-> yt
        game -.-> update      
        end

</div>


</div>
