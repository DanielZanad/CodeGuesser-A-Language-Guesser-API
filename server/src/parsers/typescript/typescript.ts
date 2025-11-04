import Scanner from "./scanner.ts";

export class Typescript {
  private hadError = false;

  public static run(snippet: string) {
    const scanner = new Scanner(snippet);
    const tokens = scanner.scanTokens();
    console.log(tokens);
  }
}
