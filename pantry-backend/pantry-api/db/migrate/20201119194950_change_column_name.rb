class ChangeColumnName < ActiveRecord::Migration[6.0]
  def change
  
        rename_column :items, :name, :item_name
    
  end
end
