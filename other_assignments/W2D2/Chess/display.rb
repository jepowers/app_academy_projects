require_relative 'board'
require_relative 'cursor'
require 'colorize'

class Display



  def initialize(board)
    @cursor = Cursor.new([0,0], board)
    @cursor_pos = @cursor.cursor_pos
    @board = board
  end

  def move(new_pos)

  end

  def render

    @cursor.get_input


    @board.grid.each_index do |row|
      @board.grid.each_index do |col|
        square = "#{@board.grid[row][col].to_s} "
        if (row + col).even?
          if @cursor_pos == [row, col]
            print square.colorize(:background => :red)
          else
            print square.colorize(:background => :blue)
          end
        else
          if @cursor_pos == [row, col]
            print square.colorize(:background => :red)
          else
            print square.colorize(:background => :green)
          end
        end
      end
        puts " "
    end

  end
end

if __FILE__ == $PROGRAM_NAME
  chester = Board.new
  lester = Display.new(chester)
  lester.render

  while true
    lester.render
  end
end
