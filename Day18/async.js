async function prom1(num = 0) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (num % 2 == 0) {
        resolve("even number");
      } else {
        reject("odd Number");
      }
    }, 5000);
  });
}
async function result() {
  try {
    const response = await prom1(9);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
