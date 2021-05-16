'use strict';
let gardenForm=document.getElementById('gardenForm');
let cat=document.getElementById('cat');
let save=document.getElementById('save');
let renderContent=document.getElementById('renderContent');
let table=document.createElement('table');
renderContent.appendChild(table);
Flowers.all=JSON.parse(localStorage.getItem('flower'))||[] ;
let flowerPath=['Alstroemerias.jpeg','Gardenias.jpeg','Orchids.jpeg','Roses.jpeg','Sunflowers.jpeg','Tulips.jpeg','Peonies.jpeg',];
function Flowers(name,season){
    this.name=name;
this.season=season;
Flowers.all.push(this);
}
save.addEventListener('click',function(event){
    let name=gardenForm.flowerName.value;
    let season=gardenForm.flowerSeason.value;
    new Flowers(name,season);
    localStorage.setItem('flower',JSON.stringify(Flowers.all));
    renderTable();
    gardenForm.flowerName.value='';

});
let tBody=document.createElement('tbody');
function renderTable(){
    tBody.innerHTML='';
    for(let i=0;i<Flowers.all.length;i++){
        let trContent=document.createElement('tr');
        let td1=document.createElement('td');
        let td2=document.createElement('td');
        let img=document.createElement('img');
        img.setAttribute('src','./img/'+Flowers.all[i].name+'.jpeg');
        td2.appendChild(img);
        let td3=document.createElement('td');
        let td4=document.createElement('td');
        let button=document.createElement('button');
        button.textContent="X";
        button.setAttribute('id',Flowers.all[i].name);
        // td2.textContent=`'./img/'+${Flowers.all[i].name}+'.jpeg'`;
        td2.setAttribute('img',`src='./img/'+${Flowers.all[i].name}+'.jpeg'`)
        td3.textContent=Flowers.all[i].name;
        td4.textContent=Flowers.all[i].season;
        td1.appendChild(button);
        trContent.appendChild(td1);
        trContent.appendChild(td2);
        trContent.appendChild(td3);
        trContent.appendChild(td4);

        tBody.appendChild(trContent);
    }
    table.appendChild(tBody);
}
renderTable();
tBody.addEventListener('click',function(event){
    let id=event.target.id;
    if(id){
        for (let i=0;i<Flowers.all.length;i++){
            if(id===Flowers.all[i].name){
                Flowers.all.splice(i,1);
                localStorage.setItem('flower',JSON.stringify(Flowers.all));
                renderTable();
                break;
            }
    }
}
});
