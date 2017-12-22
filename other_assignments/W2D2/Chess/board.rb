require_relative 'piece'
require 'byebug'

class Board

  attr_reader :grid

  def initialize
    @grid = Board.blank_grid
    self.populate
  end

  def [](pos)
    row, col = pos
    @grid[row][col]
  end

  def []=(pos, value)
    row, col = pos
    @grid[row][col] = value
  end

  def populate
    @grid.each_index do |row|
      # next if row >= 2 && row <= 5
      @grid.each_index do |col|
        # self[[row, col]] = Piece.new("fred")
        if row == 0 || row == 7
          case col
          when 0, 7
            self[[row, col]] = Rook.new(:black)
          when 1, 6
            self[[row, col]] = Knight.new(:black)
          when 2, 5
            self[[row, col]] = Bishop.new(:black)
          when 3
            self[[row, col]] = Queen.new(:black)
          when 4
            self[[row, col]] = King.new(:black)
          end
        elsif row == 1 || row == 6
          self[[row, col]] = Pawn.new(:black)
        else
          self[[row, col]] = NullPiece.new
        end
      end
    end
  end

  def self.blank_grid
    Array.new(8) { Array.new(8) }
  end

  def find_king(color)

  end

  def dup
  end

  def move_piece!(from_pos, to_pos)
    if self[from_pos].nil?
      raise "No piece at start position"
    elsif self[to_pos].nil?
      raise " fill this later "
    else
      self[from_pos], self[to_pos] = self[to_pos], self[from_pos]
    end
  end

def in_bounds(pos)
  if pos.all? { |val| val >= 0 && val <= 7 }
    return true
  end
  false
end

end
class StartPositionError < StandardError
  def message
    'No piece at start position!'
  end
end
