import { MagitChangeHunk } from "../../models/magitChangeHunk";
import { TextView } from "../abstract/textView";

export class HunkView extends TextView {
  isFoldable = true;

  constructor(private changeHunk: MagitChangeHunk) {
    super();
    this.textContent = changeHunk.diff;
  }
}