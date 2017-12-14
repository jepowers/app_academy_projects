require_relative 'board'

class Piece
  attr_accessor :name

  def initialize(color)
    @chess_piece = "\u265e"
    @color = color
  end

  def to_s
    @chess_piece
  end

  def moves

  end

  def empty?()

  end

  def symbol

  end

end


class Queen < Piece
  def initialize(color)
    color == :white ? @chess_piece = "\u2655" : @chess_piece = "\u265B"
  end
end

class King < Piece
  def initialize(color)
    color == :white ? @chess_piece = "\u2654" : @chess_piece = "\u265A"
  end
end

class Bishop < Piece
  def initialize(color)
    # super(color)
    color == :white ? @chess_piece = "\u2657" : @chess_piece = "\u265D"
  end
end

class Rook < Piece
  def initialize(color)
    color == :white ? @chess_piece = "\u2656" : @chess_piece = "\u265C"
  end
end

class Knight < Piece
  def initialize(color)
    color == :white ? @chess_piece = "\u2658" : @chess_piece = "\u265E"
  end
end

class Pawn < Piece
  def initialize(color)
    color == :white ? @chess_piece = "\u2659" : @chess_piece = "\u265F"
  end
end


class NullPiece < Piece
  def initialize
    @chess_piece = " "
  end
end
