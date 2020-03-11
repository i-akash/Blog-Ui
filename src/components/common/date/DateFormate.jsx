const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

export  function formatDate(d){
    let date=new Date(d);
    return `${date.getDate()} ${monthNames[date.getMonth()]} ${date.getFullYear()}`
}