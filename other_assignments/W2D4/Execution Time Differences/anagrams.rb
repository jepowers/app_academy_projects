def first_anagram?(str1, str2)
  result = []
  str2.chars.permutation {|perm| result << perm.join}
  result.include?(str1)
end

def second_anagram?(str1, str2)
  str1.chars.each_with_index do |ch, idx|
    if str2.include?(ch)
      str1.sub!(ch, "")
      str2.sub!(ch, "")
    end
  end

  str2.chars.each_with_index do |ch, idx|
    if str1.include?(ch)
      str2.sub!(ch, "")
      str1.sub!(ch, "")
    end
  end
  str1 == str2
end

def third_anagram?(str1,str2)
  str1.chars.sort == str2.chars.sort
end

def fourth_anagram?(str1,str2)
  hash1 = Hash.new(0)
  hash2 = Hash.new(0)
  str1.chars.each do |char|
    hash1[char] += 1
  end
  str2.chars.each do |char|
    hash2[char] += 1
  end
  hash1 == hash2
end

def fifth_anagram?(str1, str2)
  hash = Hash.new(0)

  str1.chars.each do |ch|
    hash[ch] += 1
  end

  str2.chars.each do |ch|
    hash[ch] -= 1
  end

  hash.values.all? {|val| val == 0}

end

p "first_anagram"
p first_anagram?("elvis", "lives")
p first_anagram?("elvis", "blabla")

p "second_anagram"
p second_anagram?("elvis", "lives")
p second_anagram?("elvis", "blabla")


p "third_anagram"
p third_anagram?("elvis", "lives")
p third_anagram?("elvis", "turtle")

p "fourth_anagram"
p fourth_anagram?("elvis", "lives")
p fourth_anagram?("elvis", "loves")

p "fifth_anagram"
p fifth_anagram?("elvis", "lives")
p fifth_anagram?("elvis", "loves")
