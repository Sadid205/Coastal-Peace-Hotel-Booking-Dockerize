# Generated by Django 5.1.3 on 2024-12-02 06:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('hotel', '0036_alter_bestroom_rating_alter_hotel_rating'),
    ]

    operations = [
        migrations.AlterField(
            model_name='bestroom',
            name='rating',
            field=models.CharField(blank=True, choices=[('🌟🌟🌟🌟', '🌟🌟🌟🌟'), ('🌟🌟🌟', '🌟🌟🌟'), ('🌟🌟🌟🌟🌟', '🌟🌟🌟🌟🌟'), ('🌟', '🌟'), ('🌟🌟', '🌟🌟')], max_length=10, null=True),
        ),
        migrations.AlterField(
            model_name='hotel',
            name='rating',
            field=models.CharField(choices=[('🌟🌟🌟🌟', '🌟🌟🌟🌟'), ('🌟🌟🌟', '🌟🌟🌟'), ('🌟🌟🌟🌟🌟', '🌟🌟🌟🌟🌟'), ('🌟', '🌟'), ('🌟🌟', '🌟🌟')], max_length=10),
        ),
    ]
