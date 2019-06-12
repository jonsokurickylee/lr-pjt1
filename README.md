## React 시작
```php
php artisan preset react
npm install && npm run dev
```

## 데이터베이스 관련 설정

* 데이터베이스관련 .env설정
    ```
    DB_CONNECTION=mysql
    DB_HOST=jongseoktest.cim78dtgz3dv.ap-northeast-1.rds.amazonaws.com
    DB_PORT=3306
    DB_DATABASE=pjt1
    DB_USERNAME=the2792
    DB_PASSWORD=canyou12
    ```

* 데이터베이스관련 AppServiceProvider.php 설정
    ```php
    use Illuminate\Support\Facades\Schema;

    public function boot()
    {
        Schema::defaultStringLength(191);
    }
    ```

