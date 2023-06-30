var st="";
function addplayer() {
    var input = document.getElementById("myInput");
    var inputValue = input.value;
    var st=inputValue;
    // alert(inputValue)
    var h1 = document.createElement("h1");
    h1.className="namep";
    h1.id=inputValue;
    h1.textContent=inputValue;
    document.getElementById("tableplay").appendChild(h1);
        // Create a new table element
    var table = document.createElement("table");
    table.className="table"
    
    document.getElementById("tableplay").appendChild(table);
    
    var thead = document.createElement("thead");
    table.appendChild(thead)


// -----------------------------------------------------------header
    var tr = document.createElement("tr");
    thead.appendChild(tr)
    for (var i = 0; i < 5; i++) {
      var th  = document.createElement("th");
      if (i==0) {
        th.textContent="Rount";
      } else if (i==4) {
        th.textContent="TOTal";
      } else {
        th.textContent="Rount"+i;
      }
      
      // th.textContent=i;
      tr.appendChild(th)
    }
// -----------------------------------------------------------cell
    var  tbody  =document.createElement("tbody");
    table.appendChild(tbody)

    var trx = document.createElement("tr");
    tbody.appendChild(trx)
//--------------------------------------------------------row
    for (var i = 0; i < 10; i++) {
      var trx = document.createElement("tr");
      tbody.appendChild(trx)
//--------------------------------------------------------colume
      for (var ii = 0; ii < 5; ii++) {
        var td = document.createElement("td");
      
        b=i;
        if (ii==0) {
          td.textContent="row"+(b+1);
        } else {
          var td = document.createElement("td");
          // td.textContent=i+" : "+ii;
          
          if (ii==4){
              // td.id=inputValue+"row"+i+"total";
              // td.textContent="0";
              ldtd=document.createElement("label");
              ldtd.id=inputValue+"row"+i+"total";
              ldtd.textContent="0";
              td.appendChild(ldtd);
          }
          else{
            var inpp = document.createElement("input");
            inpp.type="number";
            inpp.className=input.value+"row"+i;
            inpp.id=inputValue+"row"+i+"-colume"+ii;
            inpp.value=0;

            td.appendChild(inpp);
          }
        } 
        trx.appendChild(td)
        
      }
    }

    //------------------------------------------------fotter
    var br = document.createElement("br");
    table.appendChild(br)
    var tr = document.createElement("tr");
    table.appendChild(tr)
    for (var i = 0; i < 5; i++) {
      var th  = document.createElement("th");
      if (i==0) {
        th.textContent="TOTAL";
      } else if (i==4) {
        th.textContent="0";
        th.id=st+"alltt";
      } else {
        th.textContent="#";
      }
      
      // th.textContent=i;
      tr.appendChild(th)
    }
    addmyfun(st)
    caltotal(st)
    //------------------------------------------------------row
    
}
function addmyfun(st){
  
    
  for (var i = 0; i < 10; i++) {
    for (var ii = 1; ii < 4; ii++) {
      // console.log(inputValue+"row"+i+"-colume"+ii)
      var stt = st+"row"+i+"-colume"+ii
      const x=document.getElementById(stt)
      // console.log(x)
      //--------------------------------------------------adfun
      x.oninput=()=>{
    //---------------------------------------------------------------------calrow
      tt=document.getElementById(x.className+"total")
      let c1=Number(1);
    

      for (var iii = 1; iii < 4; iii++) {
        const xx=document.getElementById(x.className+"-colume"+iii)
        if (xx.value>0){
          // console.log(Number(xx.value));
          let datarow=Number(xx.value);
          // console.log(typeof Number(datarow));
          c1=c1+datarow
        }
        
      }
      let ttdata=(c1-1).toString();
      tt.textContent=ttdata
      totalplus(st)
      
    }

    }
  }
}

function caltotal(st) {
  for (let i = 0; i < 10; i++) {
    const idtt = st + "row" + i + "total"; // Generate the ID dynamically
    const stt = document.getElementById(idtt); // Get the element using the ID
    console.log(stt);
  }
}

function totalplus(st) {
  let total = Number();
  for(let i=0; i<10; i++){
    let getvalues = document.getElementById(st +"row"+i+"total").innerHTML;
    total+=Number(getvalues);
  }
  console.log(total);
  document.getElementById(st+"alltt").innerHTML=total;
  }




