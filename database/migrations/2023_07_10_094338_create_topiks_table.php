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
        Schema::create('topiks', function (Blueprint $table) {
            $table->id();
            $table->string('slug')->nullable();
            $table->text('body')->nullable();
            $table->integer('thumbs_up')->default(0);
            $table->integer('thumbs_down')->default(0);
            $table->foreignId('leaf_id')->constrained();
            $table->foreignId('peserta_id')->constrained();
            $table->foreignId('fasilitator_id')->constrained();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('topiks');
    }
};