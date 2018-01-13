def bad_two_sum?(ar,target)
  ar.each_index do |i|
    ar.each_index do |j|
      return true if i != j && ar[i] + ar[j] == target
    end
  end
  false
end

def okay_two_sum?(arr, target)
  sorted_arr = arr.sort.select { |val| val < target }

  sorted_arr.combination(2) do |com|
    return true if com.reduce(:+) == target
  end
  false
end

def two_sum?(arr,target)
  hash = Hash.new(0)
  arr.each do |el|
    hash[el] = el
    temp = target - hash[el]
    return true if hash.key?(temp)
  end
  false
end


p 'bad_two_sum O(n^2)'
p "----------------------------"
p bad_two_sum?([0, 1, 5, 7],6)
p bad_two_sum?([0, 1, 5, 7],100)

p 'okay_two_sum O(n)'
p "----------------------------"
p okay_two_sum?([0, 1, 5, 7],6)
p okay_two_sum?([0, 1, 5, 7],100)

p 'two_sum O(n)'
p "----------------------------"
p two_sum?([0, 1, 5, 7],6)
p two_sum?([0, 1, 5, 7],100)
