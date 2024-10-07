const db = firebase.firestore();

db.collection("dummy").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
        // You can append this data to your HTML
    });
});