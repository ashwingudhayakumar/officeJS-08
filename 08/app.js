const row=document.querySelector('.rows');
const column=document.querySelector('.columns');
const rowValue=row.value;
const columnValue=column.value;
if(true){
if(rowValue=='1' && columnValue=='1'){
    const table=document.querySelector('table');
    table.innerHTML='<tr><td><li id="home"><a href="default.asp"></a></li></td></tr>'
}

else if(row.value=='2' && column.value=='1'){
     const table=document.querySelector('table');
     table.innerHTML='<tr><td><li id="home"><a href="default.asp"></a></li></td></tr><br><tr><td><li id="home"><a href="default.asp"></a></li></td></tr>'
}

else if(row.value=='1' && column.value=='2'){
     const table=document.querySelector('table');
     table.innerHTML='<tr><td><li id="home"><a href="default.asp"></a></li></td><td><li id="prev"><a href="css_intro.asp"></a></li></td></tr>'
}

else if(row.value=='2' && column.value=='2'){
     const table=document.querySelector('table');
     table.innerHTML='<tr><td><li id="home"><a href="default.asp"></a></li></td><td><li id="prev"><a href="css_intro.asp"></a></li></td></tr><br><tr><td><li id="home"><a href="default.asp"></a></li></td><td><li id="prev"><a href="css_intro.asp"></a></li></td></tr>'
}

else if(row.value=='1' && column.value=='3'){
     const table=document.querySelector('table');
     table.innerHTML='<tr><td><li id="home"><a href="default.asp"></a></li></td><td><li id="prev"><a href="css_intro.asp"></a></li></td><td><li id="next"><a href="css_syntax.asp"></a></li></td></tr>'
}

else if(row.value=='2' && column.value=='3'){
     const table=document.querySelector('table');
     table.innerHTML='<tr><td><li id="home"><a href="default.asp"></a></li></td><td><li id="prev"><a href="css_intro.asp"></a></li></td><td><li id="next"><a href="css_syntax.asp"></a></li></td></tr><br><tr><td><li id="home"><a href="default.asp"></a></li></td><td><li id="prev"><a href="css_intro.asp"></a></li></td><td><li id="next"><a href="css_syntax.asp"></a></li></td></tr>'
}
}

