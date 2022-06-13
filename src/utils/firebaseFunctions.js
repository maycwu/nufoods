import { doc, setDoc, query, collection, orderBy, getDocs } from 'firebase/firestore';
import { firestore } from '../firebase.config';

// Saving new items
export const saveItem = async (data) => {
  await setDoc(doc(firestore, 'foodItems', `${Date.now()}`), data, {
    merge: true,
  });
};
//gets all good items
export const getAllFoodItems = async () => {
  const items = await getDocs(
    query(collection(firestore, 'foodItems'), orderBy('id', 'desc'))
  );
  return items.docs.map((doc) => doc.data());
};
