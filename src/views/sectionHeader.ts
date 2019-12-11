import { TextView } from "./abstract/textView";

export enum Section {
  Untracked = "Untracked files",
  Unstaged = "Unstaged changes",
  Staged = "Staged changes",
  Stashes = "Stashes",
  RecentCommits = "Recent commits"
}

export class SectionHeaderView extends TextView {

  constructor(private _section: Section, count?: number) {
    super();
    this.textContent = `${_section.valueOf()}${count ? " (" + count + ")" : ""}`;
  }
}