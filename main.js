class Expr {
    constructor(type) {
        this.type = type;
    }
}
class BinExpr extends Expr {
    constructor(op, lhs, rhs) {
        super("BinExpr");
        this.op =op;
        this.lhs=lhs;
        this.rhs=rhs;
    }
}

class Int extends Expr{
    constructor(value){
        super("Int");
        this.value = value;
    }
}

new Int(100)
a=new BinExpr('+', new Int(100) , new Int(200))
ab = new BinExpr(
    '+',
    new Int(1),
    new BinExpr('*', new Int(2), new Int(3))
)


function evaluate(expr) {
    if(expr instanceof BinExpr) {
        const op = expr.op;
        switch(op) {
            case '+': return evaluate(expr.lhs) + evaluate(expr.rhs);
            case '-': return evaluate(expr.lhs) - evaluate(expr.rhs);
            case '*': return evaluate(expr.lhs) * evaluate(expr.rhs);
            case '/': return evaluate(expr.lhs) / evaluate(expr.rhs);
        }
        } else if (expr instanceof Int){return expr.value;}
          else {console.assert(false);}
    }
 // 補助関数 ASTを構成する
function tAdd(a,b){return new BinExpr('+',a,b)}
function tSub(a,b){return new BinExpr('-',a,b)}
function tMul(a,b){return new BinExpr('*',a,b)}
function tDiv(a,b){return new BinExpr('/',a,b)}
function tInt(Value){return new Int(value)}

console.log(evaluate(ab))

