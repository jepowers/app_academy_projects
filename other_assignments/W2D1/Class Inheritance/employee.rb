class Employee
  attr_accessor :name, :title, :salary, :boss

  def initialize(name, title, salary, boss)
    @name = name
    @title = title
    @salary = salary
    @boss = boss
  end

  def bonus(multiplier)
    @salary * multiplier
  end
end

class Manager < Employee
  def initialize(name, title, salary, boss, subordinates)
    super(name, title, salary, boss)
    @subordinates = subordinates
  end

  def bonus(multiplier)
    salaries = []
    @subordinates.each { |subs| salaries << subs.salary }
    salaries.reduce(:+) * multiplier
  end
end
