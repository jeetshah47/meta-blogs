import app from "@/config/firebase";
import { initializeApp } from "firebase/app";
import {
  collection,
  doc,
  getFirestore,
  onSnapshot,
  setDoc,
  updateDoc,
} from "firebase/firestore";

const db = getFirestore(app);
const docRef = doc(db, "mouse-pointer", "pointer");
export const readData = async (
  field: string,
  handler: (x: number, y: number) => void
) => {
  const querySnapshot = onSnapshot(docRef, (doc) => {
    if (doc.data()) {
      // console.log(doc.data())
      const data = doc.data() as {[field: string]: { x: number; y: number }} ;
      console.log(data);
      
      handler(data[field].x, data[field].y);
    }
  });
  return querySnapshot;
};

export const addData = async (field: string, x: number, y: number) => {
  await updateDoc(docRef, {
    [field]: {
      x,
      y,
    },
  });
};

export const addNewData = async (x: number, y: number) => {
  await setDoc(docRef, {
    x,
    y,
  });
};
