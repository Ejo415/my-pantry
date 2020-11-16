class Item < ApplicationRecord
  has_many :inventories
  has_many :kitchens, through: :inventories
end
