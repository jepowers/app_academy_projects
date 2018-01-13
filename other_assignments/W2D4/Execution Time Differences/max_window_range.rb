def windowed_max_range(arr,window_size)
  current_max_range = nil
  arr.each_cons(window_size) do |sub_ar|
    max = sub_ar.sort.last - sub_ar.sort.first
    current_max_range = max if current_max_range == nil || max > current_max_range
  end
  current_max_range
end


p windowed_max_range([1, 0, 2, 5, 4, 8], 2) == 4 # 4, 8
p windowed_max_range([1, 0, 2, 5, 4, 8], 3) == 5 # 0, 2, 5
p windowed_max_range([1, 0, 2, 5, 4, 8], 4) == 6 # 2, 5, 4, 8
p windowed_max_range([1, 3, 2, 5, 4, 8], 5) == 6 # 3, 2, 5, 4, 8
