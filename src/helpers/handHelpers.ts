import { Hand } from "../types";

export const shuffleHand = (hand: Hand) => {
  return hand.sort(() => Math.random() - 0.5); 
}