export class Node {
  symbol_name: string;

  father: Node;

  public sons: Array<Node>;

  public attribute: any;

  public constructor(symbolName: string, father: Node) {
    if (this.symbol_name === undefined) this.symbol_name = null;
    if (this.father === undefined) this.father = null;
    if (this.sons === undefined) this.sons = null;
    if (this.attribute === undefined) this.attribute = null;
    this.symbol_name = symbolName;
    this.father = father;
    this.sons = <any>[];
    this.attribute = <any>{};
  }

  public setSons(sons: Array<Node>) {
    this.sons = sons;
  }

  public getSymbol_name(): string {
    return this.symbol_name;
  }

  public getFather(): Node {
    return this.father;
  }
}

Node['__class'] = 'Node';
