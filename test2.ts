if(rows.length <= 0){
    alert('No rows');
    setTimeout(function() {
       res.redirect('/lessons');
    }, 1000);
}else{
    alert('Rows found!');
}