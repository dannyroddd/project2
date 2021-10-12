function addDay() {
    let day = document.getElementById('day');
    let i = parseInt(day.value, 10);
    day.value = ++i;
}