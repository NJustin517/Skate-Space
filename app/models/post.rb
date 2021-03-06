class Post < ApplicationRecord
  belongs_to :user
  has_many :likes, dependent: :destroy
  has_many :reports
  has_many :comments, dependent: :destroy

  def username
    self.user.username
  end
end
