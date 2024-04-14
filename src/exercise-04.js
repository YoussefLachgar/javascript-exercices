const todaysDate = () => {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1; // months starting from 0
    const year = date.getFullYear();
    console.log(`${day} ${month} ${year}`);

    return `${String(day).padStart(2,"0")}/${String(month).padStart(2,"0")}/${year}`
};

export { todaysDate };
