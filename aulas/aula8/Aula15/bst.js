class Node {
    constructor(data, left = null, right = null, parent = null) {
        this.data = data;
        this.left = left;
        this.right = right;
        this.parent = parent;
    }
}

class BST {
    constructor() {
        this.root = null;
    }
    //findElement(5) -> começa buscando na raiz
    //findElement(5, obj) -> começa buscando naquela subarvore
    findElement(chave, root = this.root) {
        if (!root) {
            return 'elemento não encontrado';
        } else if (root.data === chave) {
            return 'elemento encontrado';
        }
        if (root.data > chave) {
            this.findElement(chave, root.left);
        } else {
            this.findElement(chave, root.right);
        }
    }
    insert(data) {
        if (this.root === null) {
            this.root = new Node(data);
            return;
        }
        this.recInsert(data, this.root);
    }
    recInsert(data, root) {
        if (data === root.data) {
            return;
        }
        if (data < root.data) {
            if (root.left === null) {
                let tmp = new Node(data);
                tmp.parent = root;
                root.left = tmp;
            } else {
                this.recInsert(data, root.left);
            }
        } else {
            if (root.right === null) {
                let tmp = new Node(data);
                tmp.parent = root;
                root.right = tmp;
            } else {
                this.recInsert(data, root.right);
            }
        }
    }

    preOrder(root = this.root) {
        if (!root) {
            return '.';
        }
        let mystring = '(';
        mystring += root.data + ' ';
        mystring += this.preOrder(root.left);
        mystring += ' ';
        mystring += this.preOrder(root.right);
        mystring += ')';
        return mystring;
    }

    inOrder(root = this.root) {
        if (!root) {
            return '.';
        }
        let mystring = '(';
        mystring += this.inOrder(root.left);
        mystring += ' ' + root.data + ' ';
        mystring += this.inOrder(root.right);
        mystring += ')';
        return mystring;
    }
    posOrder(root = this.root) {
        if (!root) {
            return '.';
        }
        let mystring = '(';
        mystring += this.posOrder(root.left);
        mystring += ' ';
        mystring += this.posOrder(root.right);
        mystring += ' ' + root.data;
        mystring += ')';
        return mystring;
    }

    findMin(root = this.root) {
        if (!this.root) {
            return 'árvore vazia';
        }
        if (root.left) {
            return this.findMin(root.left);
        }
        return root;
    }

    findMinPrint(root = this.root) {
        if (!this.root) {
            return 'árvore vazia';
        }
        if (root.left) {
            return this.findMinPrint(root.left);
        }
        return root.data;
    }

    findMax(root = this.root) {
        if (!this.root) {
            return 'árvore vazia';
        }
        if (root.right) {
            return this.findMax(root.right);
        }
        return root;
    }

    findMaxPrint(root = this.root) {
        if (!this.root) {
            return 'árvore vazia';
        }
        if (root.right) {
            return this.findMaxPrint(root.right);
        }
        return root.data;
    }
    getKey(chave, root = this.root) {
        if (!root) {
            return null;
        } else if (root.data === chave) {
            return root;
        }
        if (root.data > chave) {
            return this.getKey(chave, root.left);
        } else {
            return this.getKey(chave, root.right);
        }
    }
    findSuccessor(data) {
        let mynode = this.getKey(data);

        if (mynode) {
            // se houver sub-árvore direita
            if (mynode.right !== null) {
                //busque o menor elemento da subárore
                let res = this.findMin(mynode.right);
                //retorne o elemento, pois é o sucessor
                return res.data;
            }
            let p = mynode.parent;
            while (p !== null && mynode === p.right) {
                mynode = p;
                p = p.parent;
            }
            return p.data;
        }
    }
    findAntecessor(data) {
        let mynode = this.getKey(data);
        if (mynode.left !== null) {
            //busque o menor elemento da subárore
            let res = this.findMax(mynode.left);
            //retorne o elemento, pois é o sucessor
            return res.data;
        }
        let p = mynode.parent;
        while (p !== null && mynode === p.left) {
            mynode = p;
            p = p.parent;
        }
        return p.data;
    }
}

let bst = new BST();
bst.insert(24);
console.log(bst.posOrder());

bst.insert(23);
console.log(bst.posOrder());

bst.insert(22);
console.log(bst.posOrder());

bst.insert(25);
bst.insert(30);
bst.insert(35);
bst.insert(40);
console.log(bst.inOrder());
console.log(bst.findMinPrint(), 'é o menor elemento');
console.log(bst.findMaxPrint(), 'é o maior elemento');
console.log(bst.findSuccessor(24), 'é o sucesor de 24');
console.log('================================');
let bst2 = new BST();
bst2.insert(24);
bst2.insert(12);
bst2.insert(5);
bst2.insert(14);
bst2.insert(13);
bst2.insert(23);
bst2.insert(30);
console.log(bst2.inOrder());
console.log(bst2.findSuccessor(23), 'é o sucesor de 23');
console.log(bst2.findAntecessor(24), 'é o sucesor de 24');
