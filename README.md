# Lưu ý
- Sử dụng SCSS


# BASIC SHARED REPOSITORY WORKFLOW
1. Update your local repo with git pull origin master,
create a working branch with **git checkout -b MyNewBranch**
2. Make your changes on your branch and stage them with **git add .**
3. Commit your changes locally with **git commit -m "description of your commit"**, and
upload the changes (including your new branch) to GitHub with **git push origin MyNewBranch**
4. Go to the main repo on GitHub where you should now see your new branch
5. Click on your branch name
6. Click on “Pull Request” button (URC) click on “Send Pull Request

# Folder Organization

## src/api
- Chứa các API để gọi lấy thông tin từ backend

## src/assets
- Chứa các hình ảnh, css chung của trang web

## src/components
- Các components sẽ được chứa tại đây, mỗi trang/ component lớn sẽ lại được chia nhỏ thành các thư mục
- Có một Components mang tên Global nhằm đánh CSS chung cho toàn bộ các components
- Mỗi component sẽ bao gồm các thành phần:
  - Các file js
  - File index.js
  - File {}.module.css sử dụng Module CSS để tách biệt CSS giữa các components với nhau
  
## src/pages
- Chứa các trang 

## src/routes
- Chứa thông tin các Routes

## src/services
- Chứa các file js bao gồm các function xử lí login của ứng dụng


## Các bước để Thêm Layout cho 1 page
1. Tạo Layout mới trong thư mục components/layouts
2. Import Layout vào routes

## Các bước để tạo 1 Page mới
1. Duplicate Folder Home và rename
2. Chỉnh sửa
3. Vào route thêm vào Object array tương ứng

## Có thể tạo thêm các folder components trong các components
