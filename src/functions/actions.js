  /* eslint-env jquery */ 
  
export function closeDDOnClick() {
    $(document).on("click", function(event){
    
        var $trigger = $(".dropdown");

        if($trigger !== event.target && !$trigger.has(event.target).length){

            $(".dropdown").hide();

        }            

    });
  }

  export function closeDashOnClick() {
    $(document).on("click", function(event){
    
        var $trigger = $(".dashboard");

        if($trigger !== event.target && !$trigger.has(event.target).length){

            $(".dashboard").hide();

        }            

    });
  }