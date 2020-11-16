class Inventory < ApplicationRecord
  belongs_to :kitchen
  belongs_to :item
end
