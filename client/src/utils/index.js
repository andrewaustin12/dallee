import { surpriseMePrompts } from '../constants';
import FileSaver from 'file-saver';

export function getRandomPrompt(prompt) {
  const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
  const randomPromt = surpriseMePrompts[randomIndex];

  if(randomPromt === prompt) {
    return getRandomPrompt(prompt)
  }

  return randomPromt;
}

export async function downloadImage(_id, phot) {
  FileSaver.saveAs(photo, `download-${_id}.jpg`);
}