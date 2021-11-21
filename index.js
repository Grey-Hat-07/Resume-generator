var user,email,link,address,imagefile;
var career,we,eq,ts;
let t=0;
document.getElementById("next").addEventListener('click',person);
//personal details
function person()
{
  user= document.getElementById("name").value;
  email= document.getElementById("email").value;
  link= document.getElementById("Link").value;
  address=document.getElementById("address").value;
  //image
  imagefile=document.getElementById("file").files[0]
  if(document.getElementById("file").value==""){
    t++;
  }
  next();
}

function next()
{   var dis,tag;
    


    tag=document.getElementById("details")
    dis=document.getElementById("display");
    tag.innerHTML=`Professional Details`;
    dis.innerHTML=`
    <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">Career Objective</label>
        <textarea class="form-control" id="career" rows="4" placeholder="Enter Here"></textarea>
    </div>
    <!--technical skill-->
    <div class="mb-3" id="ts">
        <label for="exampleFormControlTextarea1" class="form-label">Technical Skill</label>
        <textarea class="form-control classts" id="exampleFormControlTextarea1" rows="3" placeholder="Enter Here"></textarea>
        <button type="button"  class="btn btn-primary" id="tsfield" onclick="newts()">+Add</button>
    </div>
     
    <div class="mb-3" id="Eq">
        <label for="exampleFormControlTextarea1" class="form-label">Educational Qualification</label>
        <textarea class="form-control classeq" id="exampleFormControlTextarea1" rows="3" placeholder="Enter Here"></textarea>
        <button type="button" class="btn btn-primary" id="eqfield" onclick="neweq()">+Add</button> 
    </div>
    
    <div class="mb-3" id="we">
        <label for="exampleFormControlTextarea1" class="form-label">Work Experience</label>
        <textarea class="form-control classwe" id="exampleFormControlTextarea1" rows="3" placeholder="Enter Here"></textarea>
        <button type="button" class="btn btn-primary" onclick="newwe()" id="wefield">+Add</button><br><br>
    </div>
     
    <button type="button" class="btn btn-primary bottom" id="resume">Generate CV</button>
    `
    
    document.getElementById("resume").addEventListener('click',resume);
}
//add new textarea for technical skill
function newts()
{
    let node=document.createElement("textarea");
    node.classList.add("form-control");
    node.classList.add("classts")
    node.setAttribute("placeholder","Enter here");
    node.setAttribute("rows","3");
    let tsfield=document.getElementById("tsfield");
    let Addts=document.getElementById("ts");
    Addts.insertBefore(node,tsfield);
}
//add new textarea for educational qualification
function neweq()
{
    let node=document.createElement("textarea");
    node.classList.add("form-control");
    node.classList.add("classeq")
    node.setAttribute("placeholder","Enter here");
    node.setAttribute("rows","3");
    let tsfield=document.getElementById("eqfield");
    let Addts=document.getElementById("Eq");
    Addts.insertBefore(node,tsfield);
}
//add new textarea for work experience
function newwe()
{
    let node=document.createElement("textarea");
    node.classList.add("form-control");
    node.classList.add("classwe")
    node.setAttribute("placeholder","Enter here");
    node.setAttribute("rows","3");
    let tsfield=document.getElementById("wefield");
    let Addts=document.getElementById("we");
    Addts.insertBefore(node,tsfield);
}
//resume function
function resume()
{   //var name=document.getElementById("name").value;
    career=document.getElementById("career").value;
    //technical skill
    ts=document.getElementsByClassName("classts")
    let tsval="";
    for(let e of ts){
      tsval=tsval + `<li>${e.value}</li>`
    } 
    //educational qualification
    eq=document.getElementsByClassName("classeq")
    let eqval="";
    for(let e of eq){
      eqval=eqval + `<li>${e.value}</li>`
    } 
    //work experience
    we=document.getElementsByClassName("classwe")
    let weval="";
    for(let e of we){
      weval=weval + `<li>${e.value}</li>`
    } 
    //image reading
    if(t==0){
    var reader= new FileReader();
    reader.readAsDataURL(imagefile)
    reader.onloadend=function()
    {
        document.getElementById("img").src=reader.result;
    }
    }
    //output of the resume page
    document.getElementById("bot").innerHTML=``;
    document.getElementById("head").innerHTML=``
    document.getElementById("head").style.padding="0px";
    document.getElementById("details").innerHTML=``
    document.getElementById("display").innerHTML=`<!--personal details-->
        <div class="row align-items-start">
          <div class="col-4">
            
            <img src="https://icon-library.com/images/unknown-person-icon/unknown-person-icon-4.jpg" class="rounded-circle" id="img" alt="...">
            <h4 style="text-align: justify;">${user}</h4>
            <hr>
            <p>Email:<br>${email}</p>
            <p>LinkedIn:<br>${link}</p><br>
            <p>${address}</p>
          </div>

          <!--professional details-->
          <div class="col-8" id="main">
            <h2 style="text-align: center;">${user}</h2><br>
            <div class="card">
              <div class="card-header">
                <h4>Career Objective</h4>
              </div>
              <div class="card-body">
                <p class="card-text">${career}</p>
                </div>
            </div>

            <div class="card">
              <div class="card-header">
                <h4>Technical Skill</h4>
              </div>
              <div class="card-body">
                <p class="card-text"><ul id="ts">
                  ${tsval}
                </ul></p>
                </div>
            </div>

            <div class="card">
              <div class="card-header">
                <h4>Educational Qualification</h4>
              </div>
              <div class="card-body">
                <p class="card-text"><ul>
                  ${eqval}
                </ul></p>
                </div>
            </div>

            <div class="card">
              <div class="card-header">
                <h4>Work Experience</h4>
              </div>
              <div class="card-body">
                <p class="card-text"><ul>
                  ${weval}
                </ul></p>
                </div>
            </div>

            <button type="button" class="btn btn-info bottom" onclick="window.print()" style="margin-top: 5%;">Print</button>
          </div>
          
        </div>`
}


