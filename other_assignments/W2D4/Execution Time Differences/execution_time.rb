def my_min(list)
  result = list[0]

  i = 0
  while i < list.length - 1
    j = i + 1
    while j < list.length
      if result > list[j]
        result = list[j]
      end
      j += 1
    end
    i += 1
  end
  result
end

# def my_min(list)
#   result = list[0]
#
#   list.each do |el|
#     if result > el
#       result = el
#     end
#   end
#   result
# end

# list = [ 0, 3, 5, 4, -5, 10, 1, 90 ]
# p my_min(list)


# def largest_contiguous_subsum(list)
#   result = []
#   max = 0
#
#   i = 0
#   while i < list.length - 1
#     j = i + 1
#     while j < list.length
#       result << list[i..j]
#       j += 1
#     end
#     i += 1
#   end
#
#   result.each do |val|
#     max = val.reduce(:+) unless val.reduce(:+) < max
#   end
#
#   max
# end

def largest_contiguous_subsum(list)
  result = []
  i = 0
  while i < list.length - 1
    j = i + 1
    result << list[i..j]
    i += 1
  end
  result
end

def largest_contiguous_subsum(list)
  max = list[0]
  total = 0
  (0..list.length - 1).each do |i|
    total = total + list[i]
    if total > 0
      max = total if total > max
    else
      total = 0
    end
  end
  max
end



list = [2, 3, -6, 7, -6, 7]
p largest_contiguous_subsum(list)
