class Node {
    public int data;
    public Node prev;
    public Node next;

    public Node(int data){
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList{
    public Node head;
    public Node tail;

    public DoublyLinkedList(int[] ary){
        this.head = new Node(ary[0]);
        Node save = this.head;
        // System.out.println(this.head.data);

        for (int i = 1; i < ary.length; i++){
            this.head.next = new Node(ary[i]);
            this.head.next.prev = this.head;
            // System.out.println("prev:"+this.head.prev.data);
            // System.out.println(this.head.next.data);
            this.head = this.head.next;
            // System.out.println(":"+this.head.prev.data);
        }

        this.tail = this.head;
        this.head = save;

    }

    public void printList(){
        Node save = this.head;
        while (this.head != null){
            // System.out.println(this.head.data);
            this.head = this.head.next;
        }
        // System.out.println(this.head.data);
        this.head = save;
    }

    // public void printRevList(){
    //     Node save = this.tail;
    //     while (this.prev != null){
    //         System.out.println(this.prev.data);
    //         this.prev = this.prev.next;
    //     }
    //     // System.out.println(this.prev.data);
    //     this.tail = save;
    // }
}

class MyClass{
    public static void main(String[] args){
        int[] ary = new int[]{1,2,3,4,5,6,7};
        DoublyLinkedList numList = new DoublyLinkedList(ary);
        // System.out.println("------");
        // numList.printList();
        // System.out.println("------");
        // // numList.printRevList();
        // System.out.println("------");
        System.out.println(numList.head.data);
        System.out.println(numList.head.next.data);
        System.out.println(numList.head.next.prev.data);
        System.out.println(numList.tail.data);
        System.out.println(numList.tail.prev.data);
        System.out.println(numList.tail.prev.prev.data);
    }
}