self.addEventListener("install", (event) => {
  console.log("[service worker] Service Worker installed");
  event.waitUntil(self.skipWaiting());
});

self.addEventListener("activate", (event) => {
  console.log("[service worker] Service Worker activated");
  event.waitUntil(self.clients.claim());
});

let userToken = null;

self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SET_USER") {
    userToken = event.data.token;
  }
  console.log(userToken);
});

let latestId = null;
const setPooler = async () => {
  const interval = setInterval(async () => {
    console.log("[service worker] pooling notification...");
    const res = await fetch(
      `http://localhost:3000/notification?_sort=date&_order=desc`,
      {
        headers: {
          "ngrok-skip-browser-warning": "true",
        },
      }
    );
    console.log(res.status);
    if (res.ok) {
      const data = await res.json();
      console.log(data);
      const { id, title, message, userIDs } = data[0];

      console.log(userIDs);
      if (id != latestId) {
        console.log(
          `[service worker] received notification\n title: ${title}\n message: ${message}\n these user can be received message: ${userIDs}`
        );
        if (userIDs.some((user) => user.id == userToken)) {
          self.registration.showNotification(title, {
            body: message,
          });
          console.log("[service worker] show complete");
        }
        latestId = id;
      } else {
        console.log("[service worker] no new notification found");
      }
    }
  }, 30000);
};

setPooler();
