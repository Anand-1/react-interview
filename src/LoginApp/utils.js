export function login({ email, password }) {
  const delay = (0.7 + Math.random() * 2) * 1000;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (password === "123456" && !!email) {
        resolve();
      } else {
        reject(new Error("Invalid email or password! "));
      }
    }, delay);
  });
}
