# require_relative 'board'
class Piece
  # attr_accessor :name

  def initialize(color)(color)
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
    @chess_piece = "\u2655"
  end
end

class King < Piece
  def initialize(color)
    @chess_piece = "\u2654"
  end
end

class Bishop < Piece
  def initialize(color)
    # super(color)
    @chess_piece = "\u2657"
  end
end

class Rook < Piece
  def initialize(color)
    @chess_piece = "\u2656"
  end
end

class Knight < Piece
  def initialize(color)
    @chess_piece = "\u2658"
  end
end

class Pawn < Piece
  def initialize(color)
    @chess_piece = "\u2659"
  end
end


class NullPiece < Piece
  def initialize
    @chess_piece = " "
  end
end
