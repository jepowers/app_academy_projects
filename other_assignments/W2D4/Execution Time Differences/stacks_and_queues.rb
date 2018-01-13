class MyStack

  def initialize
    @stack = []
  end

  def add(el)
    @stack.push(el)
  end

  def remove
    @stack.pop
  end

  def peek
    @stack.last
  end

  def size
    @stack.length
  end

  def empty?
    @stack.empty?
  end

end

class MyQueue

  def initialize
    @queue = []
  end

  def enqueue(el)
    @queue.push(el)
  end

  def dequeue
    @queue.shift
  end

  def peek
    @queue.first
  end

  def size
    @queue.length
  end

  def empty?
    @queue.empty?
  end
end

class StackQueue

  def initialize
    @stack1 = MyStack.new
    @stack2 = MyStack.new
  end

  def enqueue(el)
    @stack1.add(el)
  end

  def dequeue
    @stack2.add(@stack1.remove) until @stack1.empty?
    removed_item = @stack2.remove
    @stack1.add(@stack2.remove) until @stack2.empty?
    removed_item
  end

  def peek
    @stack1.peek
  end

  def size
    @stack1.size
  end

  def empty?
    @stack1.empty?
  end

end

class MaxStack

  def initialize
    @stack = Hash.new
  end

  def add(el)
    if !@stack.key?(el)
      @stack[el] = hash.size + 1
      @stack[max] = el unless hash[max] > el
    else
      @stack
    end
  end

  def remove
    @stack.pop
  end

  def peek
    @stack.last
  end

  def size
    @stack.length
  end

  def empty?
    @stack.empty?
  end

  def max

  end

  def min
  end

end
