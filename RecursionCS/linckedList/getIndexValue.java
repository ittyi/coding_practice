class SinglyLinkedListNode<E>{
    public E data;
    public SinglyLinkedListNode<E> next;

    public SinglyLinkedListNode(E data){
        this.data = data;
        this.next = null;
    }
}

class Solution{
    public static int getIndexValue(SinglyLinkedListNode<Integer> head, int index){
        // 関数を完成させてください
        int count = 1;
        while (head != null){
            if (count == index) return head.data;
            head = head.next;
            count++;
        }
        return -1;
    }
}

