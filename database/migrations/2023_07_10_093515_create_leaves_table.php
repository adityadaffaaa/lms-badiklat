<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('leaves', function (Blueprint $table) {
            $table->id();
            $table->string('leaf_title')->nullable();
            $table->text('deskripsi')->nullable();
            $table->enum('status', ['tersedia', 'tersisa', 'habis']);
            $table->integer('max_peserta')->nullable();
            $table->date('mulai')->nullable();
            $table->date('selesai')->nullable();
            $table->foreignId('fasilitator_id');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('leaves');
    }
};