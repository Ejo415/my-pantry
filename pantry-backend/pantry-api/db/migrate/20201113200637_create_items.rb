class CreateItems < ActiveRecord::Migration[6.0]
  def change
    create_table :items do |t|
      t.string :name
      t.string :category
      t.integer :inventory
      t.references :kitchen, null: false, foreign_key: true

      t.timestamps
    end
  end
end
