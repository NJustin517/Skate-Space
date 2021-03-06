class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :password_digest, :profile_picture, :first_name, :last_name, :follows

  has_many :posts
  has_many :follows
  has_many :likes
  # has_many :followed_users
end
